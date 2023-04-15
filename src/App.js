import html2canvas from 'html2canvas';
import './App.css';

function App() {

  const downloadImage = () => {
    const table = document.getElementById('table-container');

    html2canvas(table).then(function (canvas) {
      const link = document.createElement('a');
      link.download = 'table.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  return (
    <>
      <div id="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>25</td>
              <td>New York</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>30</td>
              <td>Los Angeles</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>40</td>
              <td>Chicago</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={downloadImage}>Download Image</button>
    </>
  );
}

export default App;