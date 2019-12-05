import React,{useState} from 'react';
import marked from 'marked'
import '../static/css/Pages/addArticle.css'
import {Input,Select,Button,DatePicker} from 'antd'

const {Option} = Select

const {TextArea} = Input

function AddArticle() {

    const [articleId,setArticleId] = useState() //文章ID
    const [articleTitle,setArticleTitle] = useState() //文章标题
    const [articleContent,setArticleContent] = useState() // 文章内容
    const [markdownContent,setMarkdownContent] = useState('预览内容') // 文章内容md
    const [introduceMd,setIntroduceMd] = useState() //简介
    const [introduceHtml,setIntroduceHtml] = useState('等待编辑') //简介md
    const [showDate,setShowDate] = useState() //发布日期
    const [upDataDate,setUpDataDate] = useState() //修改日期
    const [typeInfo,setTypeInfo] = useState() //文章类型
    const [selectedType,setSelectedType] = useState(1) //选择默认文章类型

    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
      }); 
    
      const getContent = (e)=>{
          setArticleContent(e.target.value)
          let html = marked(e.target.value)
          setMarkdownContent(html)
          console.log(markdownContent)
      }
      const changeMarkdownContent = (e) => {
        setIntroduceMd(e.target.value)
          let html = marked(e.target.value)
          setIntroduceHtml(html)
      }
      const getTypeInfo = (value) => { 
          setSelectedType(value.key);
          setTypeInfo(value.label);
      }
      const getTitle = (e) => {
          
          setArticleTitle(e.target.value)
      }
      const getDate = (date, dateString) => {
          console.log(date, dateString)
          setShowDate(dateString)
      }
      const getUpDataDate = (date, dateString) => {
        console.log(date, dateString)
        setUpDataDate(dateString)
    } 
    const putOutArticle = () => {
        setArticleId(Math.round(Math.random()*10000000))
    }
    return(
        <div className="article">
            <div className="article-content">
                <Input 
                    placeholder="博客标题"
                    style={{width:'75%',display:"inline"}}
                    onChange={getTitle}
                />
                <Select
                    labelInValue
                    defaultValue={{key:"1"}}
                    style={{display:"inline-block", marginLeft:"20px",width:"100px"}}
                    onChange={getTypeInfo}
                >
                    <Option  key="1">视频</Option>
                    <Option  key="2">生活</Option>
                </Select>
                <div className="text-content">
                    <TextArea style={{flex:'1',height:'560px'}} placeholder="文章内容" onChange={getContent} onPressEnter={getContent}></TextArea>
                    <div className="show-html" dangerouslySetInnerHTML = {{__html:markdownContent}} placeholder="预览内容"></div>
                </div>
            </div>
            <div className="article-other">
                <Button type='default'>暂存文章</Button>
                <Button type="primary" style={{margin:5}} onClick={putOutArticle}>发布文章</Button>
                <TextArea style={{height:120,marginTop:10}} placeholder="文章简介" onChange={changeMarkdownContent} onPressEnter={changeMarkdownContent}></TextArea>
                {/* <TextArea style={{marginTop:10}} placeholder="文章简介：等待编辑"></TextArea> */}
                <div className="introduce-html" dangerouslySetInnerHTML = {{__html:introduceHtml}} placeholder="文章简介：等待编辑"></div>
                <div className="article-data">
                    <DatePicker placeholder="发布日期"  style={{width:150}} onChange={getDate}/>
                    <DatePicker placeholder="修改日期" style={{width:150,marginLeft:30}} onChange={getUpDataDate}/>
                </div>
            </div>
        </div>
    )
}
export default AddArticle