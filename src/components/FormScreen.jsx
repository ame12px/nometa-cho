import { useState, useEffect } from 'react'

// 登録画面（SP_02）
function FormScreen({ onCancel, onSubmit, editData }) {
  const getLocalDatetime = () => {
    const now = new Date()
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16)
  }
  
  const [name, setName] = useState('')
  const [datetime, setDatetime] = useState(getLocalDatetime)
  const [memo, setMemo] = useState('')

  const handleSubmit = () => {
    if (!name) {
      alert('くすり名を入力してください')
      return
    }
    onSubmit({ name, datetime, memo })
  }

  // editDataが渡されたらフォームに初期値をセット
  useEffect(() => {
    if (editData) {
      setName(editData.name)
      setDatetime(editData.datetime ?? getLocalDatetime())
      setMemo(editData.memo)
    } else {
      setName('')
      setDatetime(getLocalDatetime())
      setMemo('')
    }
  }, [editData])

  return (
    <div>
      <header className="header">
        <h1>くすりぽ</h1>
      </header>

      <div className="form">
        <div className="form-group">
          <label>くすり名</label>
          <input type="text" placeholder="カロナール" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label>日時</label>
          <input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
        </div>

        <div className="form-group">
          <label>体調メモ</label>
          <textarea placeholder="朝から頭が痛い" value={memo} onChange={(e) => setMemo(e.target.value)}></textarea>
        </div>

        <div className="form-buttons">
          <button className="cancel-button" onClick={onCancel}>キャンセル</button>
          <button className="submit-button" onClick={handleSubmit}>
            {editData ? '更新する' : '登録する'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormScreen