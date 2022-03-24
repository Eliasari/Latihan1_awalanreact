import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nilai1: null,
      nilai2: null,
      operasi: null,
      result: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    const operasi = this.refs.operator.value;

    var result;
    switch (operasi) {
      case '/':
        result = nilai1 / nilai2;
        break;
      case '-':
        result = nilai1 - nilai2;
        break;
      case '+':
        result = nilai1 + nilai2;
        break;
      case '*':
        result = nilai1 * nilai2;
        break;
      default:
        console.Log("Ini akhir");
    }
    this.setState({ nilai1, nilai2, operasi, result });

    this.refs.nilai1.value = null;
    this.refs.nilai2.value = null;
  }

  Hasil() {
    const { result } = this.state;

    if (this.state.result) {
      return (
        <div>
          <p className="alert alert-success">
            {result}
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1 className="font-bold uppercase">Kalkulator</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2" >
            <label className="w-2/5 text-sm">
              Nilai 1:
            </label>
            <input
              class="px-4 py-1 rounded-xl border bg-white w-full"
              className='form-control'
              ref="nilai1"
              type="number"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="w-2/5 text-sm">
              Nilai 2:
            </label>
            <input
              class="px-4 py-1 rounded-xl border bg-white w-full"
              className='form-control'
              ref="nilai2"
              type="number"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <select class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ref="operator" className="form-control">
              <option value="+">+</option>
              <option value="/">/</option>
              <option value="*">*</option>
              <option value="-">-</option>
            </select>
          </div>

          <button class="px-4 py-2 rounded-xl bg-blue-500 w-full text-sm uppercase font-bold text-white">
            Hitung
          </button>
        </div>
        </form>
        <div className="mt-4 p-4 border rounded-xl text-sm font-mono whitespace-pre-wrap">
          {/* {Hasil} */}
          {this.Hasil()}
        </div>
      </div>
    );
  }
}
export default App;
