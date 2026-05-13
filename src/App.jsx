import { useEffect, useState } from "react"
import './App.css'
import ListScreen from "./components/ListScreen"
import FormScreen from "./components/FormScreen"

function App() {
  // 'list' か 'form' で画面を切り替える
  const [screen, setScreen] = useState('list')
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem('records')
    return saved ? JSON.parse(saved) : []
  })
  const [editIndex, setEditIndex] = useState(null)

  // 2. recordsが変わるたびにlocalStorageに保存する
  useEffect(() => {
    if (records.length > 0) {
      localStorage.setItem('records', JSON.stringify(records))
    }
  }, [records])
  
  const handleDelete = (index) => {
    setRecords(records.filter((_, i) => i !== index))
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    setScreen('form')
  }

  const handleSubmit = (newRecord) => {
    if (editIndex !== null) {
      // 編集モード → 該当データを上書き
      const updated = records.map((r, i) => i === editIndex ? newRecord : r)
      setRecords(updated)
      setEditIndex(null)
    } else {
      // 先頭に追加（新しい順）
      setRecords([newRecord, ...records])
    }
    setScreen('list')
  }

  return (
    <div className="app">
      {screen === 'list' ? (
        <ListScreen
          records={records}
          onAdd={() => {
            setEditIndex(null)
            setScreen('form')
          }}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : (
        <FormScreen
          onCancel={() => setScreen('list')}
          onSubmit={handleSubmit}
          editData={editIndex !== null ? records[editIndex] : null}
        />
      )}
    </div>
  )
}

export default App