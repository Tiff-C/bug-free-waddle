
const app = document.getElementById('app');

function Header({ title }) {
  console.log(title); 
  return (<h1>{title ? title : 'Default title'}</h1>);
}

function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header title="React"/>
      <Header title="A new title" />
      <Header/>
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage/>);