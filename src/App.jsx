import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import ListScreen from "./components/ListScreen"
import FormScreen from "./components/FormScreen"

function App() {
  const navigate = useNavigate()
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem('records')
    return saved ? JSON.parse(saved) : []
  })
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    if (records.length > 0) {
      localStorage.setItem('records', JSON.stringify(records))
    }
  }, [records])
  
  const handleDelete = (index) => {
    if (window.confirm('削除しますか？')) {
      setRecords(records.filter((_, i) => i !== index))
    }
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    navigate('/form')
  }

  const handleSubmit = (newRecord) => {
    if (editIndex !== null) {
      const updated = records.map((r, i) => i === editIndex ? newRecord : r)
      setRecords(updated)
      setEditIndex(null)
    } else {
      setRecords([newRecord, ...records])
    }
    navigate('/')
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ListScreen
              records={records}
              onAdd={() => {
                setEditIndex(null)
                navigate('/form')
              }}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          }
        />
        <Route
          path="/form"
          element={
            <FormScreen
              onCancel={() => navigate('/')}
              onSubmit={handleSubmit}
              editData={editIndex !== null ? records[editIndex] : null}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App