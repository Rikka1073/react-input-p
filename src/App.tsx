import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  const onChangeClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setChecked(checked);
  };

  return (
    <>
      <div className="text-center mt-5">
        <input type="checkbox" id="name" name="name" checked={checked} onChange={onChangeClick} />
        <label htmlFor="name">名前</label>
        <div className="font-bold">{checked ? <p>チェックされています</p> : null}</div>
      </div>
    </>
  );
}

export default App;
