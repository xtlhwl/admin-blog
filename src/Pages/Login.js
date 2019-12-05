import React,{useState} from 'react';
import {Card,Input,Icon,Button,Spin} from 'antd'
import 'antd/dist/antd.css'
import '../static/css/Pages/Login.css'
function Login() {

    const [userName,setUserName] = useState()
    const [userPassWord,setUserPassWord] = useState()
    const [loading,setLoading] = useState(false)

    const checkLogin = () => {
        if(userName && userPassWord){
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)
                console.log(userName,userPassWord)
            },1000)
        }
    }

    return (
        <div className="login-div">
            <Spin
                tip="加载中..."
                spinning={loading}
            >
                <Card
                    title = "后台登录"
                    bordered={true}
                    style={{width:400,border:'1px solid rgba(0,0,0,0.1)',borderRadius:'3%',boxShadow:'5px 9px 16px rgba(0,0,0,0.15)'}}
                >
                <Input
                    id={{userName}}
                    placeholder="Enter Your Name"
                    size="large"
                    prefix={<Icon type="user"  style={{color:'rgba(0,0,0,0.25)'}}/>}
                    onChange={(e)=>{
                        setUserName(e.target.value)
                    }}
                ></Input>
                <br/>
                <br/>
                <Input.Password
                    id={{userPassWord}}
                    placeholder="Enter Your Password"
                    size="large"
                    prefix={<Icon type="key"  style={{color:'rgba(0,0,0,0.25)'}}/>}
                    onChange={(e)=>{
                        setUserPassWord(e.target.value)
                    }}
                ></Input.Password>
                <br/>
                <br/>
                <Button type="primary" className="login-Enter" onClick={checkLogin}>登录</Button>
                <Button type="default" className="login-clear">取消</Button>
                </Card>
            </Spin>
        </div>
    )
}
export default Login