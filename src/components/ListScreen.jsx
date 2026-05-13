import { useState } from 'react'

// 一覧画面（SP_01）
function ListScreen({ records, onAdd, onDelete, onEdit }) {
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState('new')

  const filtered = records.filter((record) =>
    record.name.includes(search)
  )

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'new') {
      return a.date < b.date ? 1 : -1 //新しい順
    } else {
      return a.date > b.date ? 1 : -1 //古い順
    }
  })
  
  return (
    <div className="list-screen">
      <header className="header">
        <h1>のめた帖</h1>
      </header>

      <div className="list-top">
        <button className="add-button" onClick={onAdd}>
          ＋ 登録する
        </button>
        <input
          className="search-input"
          type="text"
          placeholder="くすり名で検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="sort-buttons">
          <button
            className={sortOrder === 'new' ? 'sort-active' : 'sort-button'}
            onClick={() => setSortOrder('new')}
          >
            新しい順
          </button>
          <button
            className={sortOrder === 'old' ? 'sort-active' : 'sort-button'}
            onClick={() => setSortOrder('old')}
          >
            古い順
          </button>
        </div>
      </div>

      

      <ul className="record-list">
        {sorted.map((record, index) => (
          <li key={index} className="record-item">
            <div>
              <p className="record-name">{record.name}</p>
              <p className="record-date">{record.date.replace(/-/g, '/')}</p>
              <p className="record-memo">{record.memo}</p>
            </div>
            <div className="action-buttons">
              <button className="edit-button" onClick={() => onEdit(index)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
              <button className="delete-button" onClick={() => onDelete(index)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                  <path d="M10 11v6M14 11v6"/>
                  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListScreen