import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./iframe-Cgo0Qj7p.js";import{I as l}from"./Input-ksLMzX3K.js";import{K as g}from"./Button-BW2vI1Aq.js";const c=({children:a,onSubmit:s,className:t})=>e.jsx("form",{onSubmit:s,className:`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ${t}`,children:a});c.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FormEvent<HTMLFormElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLFormElement>",elements:[{name:"HTMLFormElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Components/Form",component:c},n={render:a=>{const[s,t]=o.useState(""),[r,u]=o.useState("");return e.jsxs(c,{...a,onSubmit:m=>{m.preventDefault(),console.log("Form submitted!",{username:s,password:r})},children:[e.jsx("div",{className:"mb-4",children:e.jsx(l,{value:s,onChange:t,placeholder:"Username"})}),e.jsx("div",{className:"mb-4",children:e.jsx(l,{value:r,onChange:u,placeholder:"Password"})}),e.jsx(g,{label:"Submit"})]})},args:{className:""}},d={render:a=>{const[s,t]=o.useState(""),[r,u]=o.useState(""),[m,i]=o.useState("");return e.jsxs(c,{...a,onSubmit:f=>{f.preventDefault(),!s||!r?i("Both fields are required!"):(i(""),console.log("Form submitted!",{username:s,password:r}))},children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"username",className:"block text-sm font-medium mb-1",children:"Username"}),e.jsx(l,{value:s,onChange:t,placeholder:"Username",type:"text"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"password",className:"block text-sm font-medium mb-1",children:"Password"}),e.jsx(l,{value:r,onChange:u,placeholder:"Password",type:"password"})]}),m&&e.jsx("div",{className:"text-sm text-red-600 mb-4 border border-red-300 bg-red-100 p-2 rounded",children:m}),e.jsx(g,{label:"Submit"})]})},args:{className:""}};var p,b,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return <Form {...args} onSubmit={e => {
      e.preventDefault();
      console.log('Form submitted!', {
        username,
        password
      });
    }}>
        <div className="mb-4">
          <Input value={username} onChange={setUsername} placeholder="Username" />
        </div>

        <div className="mb-4">
          <Input value={password} onChange={setPassword} placeholder="Password" />
        </div>

        <KButton label="Submit" />
      </Form>;
  },
  args: {
    className: ''
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,x,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    return <Form {...args} onSubmit={e => {
      e.preventDefault();
      if (!username || !password) {
        setError('Both fields are required!');
      } else {
        setError('');
        console.log('Form submitted!', {
          username,
          password
        });
        // Optionally clear fields:
        // setUsername('');
        // setPassword('');
      }
    }}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username
          </label>
          <Input value={username} onChange={setUsername} placeholder="Username" type="text" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <Input value={password} onChange={setPassword} placeholder="Password" type="password" />
        </div>

        {error && <div className="text-sm text-red-600 mb-4 border border-red-300 bg-red-100 p-2 rounded">
            {error}
          </div>}

        <KButton label="Submit" />
      </Form>;
  },
  args: {
    className: ''
  }
}`,...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const P=["Default","WithValidation"];export{n as Default,d as WithValidation,P as __namedExportsOrder,E as default};
