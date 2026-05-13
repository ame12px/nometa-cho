import { useState, useEffect } from 'react'

// 登録画面（SP_02）
function FormScreen({ onCancel, onSubmit, editData }) {
  const [name, setName] = useState('')
  const today = new Date().toISOString().split('T')[0]
  const [date, setDate] = useState(today)
  const [memo, setMemo] = useState('')

  // editDataが渡されたらフォームに初期値をセット
  useEffect(() => {
    if (editData) {
      setName(editData.name)
      setDate(editData.date)
      setMemo(editData.memo)
    } else {
      setName('')
      setDate(today)
      setMemo('')
    }
  }, [editData])

  return (
    <div>
      <header className="header">
        <h1>のめた帖</h1>
      </header>

      <div className="form">
        <div className="form-group">
          <label>くすり名</label>
          <input type="text" placeholder="カロナール" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>日にち</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="form-group">
          <label>体調メモ</label>
          <textarea placeholder="朝から頭が痛い" value={memo} onChange={(e) => setMemo(e.target.value)}></textarea>
        </div>

        <div className="form-buttons">
          <button className="cancel-button" onClick={onCancel}>キャンセル</button>
          <button
           className="submit-button"
           onClick={() => onSubmit({ name, date, memo })}
          >
            {editData ? '更新する' : '登録する'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormScreen