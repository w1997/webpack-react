import style from "./index.less";
import React, { useEffect, useState } from "react";
import action from "../../action";
import { Input, Button } from 'antd';

const Home: React.FC = (props: any) => {
  console.log(props.data);
  const [title, setTitle] = useState({});
  useEffect(() => {
    // 接受state
    // @ts-ignore 
    action.onGlobalStateChange((state: any) => {
      console.log(state, "home页面数据");
      setTitle(state)
    }, true);
  }, []);
  const btnFunc = () => {
    console.log(title)
    // 修改state
    action.setGlobalState({ tsData: { ...title, title: "ts应用" } });
  }
  return (
    <div className={style.homePage}>
      <Input placeholder="Basic usage" />
      这是ts+webpack页面={title?.tsData?.title}
      <div><Button onClick={btnFunc} type="primary" ></Button></div>
    </div>
  )
}
export default Home;