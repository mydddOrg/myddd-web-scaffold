import * as React from "react"
import * as ReactDOM from "react-dom"

import { InstanceFactory } from "./components/ioc/InstanceFactory"
import 'style/common.css'
import { observer } from "mobx-react-lite"
import { HashRouter, Route } from "react-router-dom"
import Loading from "views/common/Loading"

InstanceFactory.initIOC()

const LazyMain= React.lazy(() => import(/* webpackChunkName: "Main" */ "./views/Main"))

const root = document.createElement("div")
root.id = 'app'
document.body.appendChild(root)


const App = observer((props?: any) => {

  return (
    <React.Suspense fallback={<Loading />}>
      <HashRouter >
        <div className='full_div'>
          <Route path="/" exact component={LazyMain} />
        </div>
      </HashRouter>
    </React.Suspense>
  )
})


ReactDOM.render(
  <App />,
  document.getElementById("app")
)
