import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./components/home/index";
// import "./public-path";
const App: React.FC<any> = () => {
  return (
    <div>
      主应用
      <Home></Home>
    </div>
  )
}
let root: any = null;

function render(props: any) {
  const { container } = props;
  console.log("方法进入，开始渲染");
  const list = container ? container.querySelector('#root') : document.querySelector('#root');
  root = ReactDOM.createRoot(list);
  root.render(<App />);
  // ReactDOM.render(<App />, list);
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<App />);
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
//渲染之前
export async function bootstrap() {
  console.log('[reactts] react app bootstraped');
}
//挂载
export async function mount(props: any) {
  console.log('[reactts] props from main framework', props);
  render(props);
}
//卸载
export async function unmount(props: any) {
  const { container } = props;
  console.log("卸载。。。")
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
  root.unmount()
}
//@ts-ignore
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);