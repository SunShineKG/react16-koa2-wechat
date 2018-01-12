import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/component/App'
import { Provider } from 'mobx-react'
import * as stores from './store'
import '@/assets/styles/public.css'

ReactDOM.render(
  <Provider { ...stores }>
    <App />
  </Provider>,
  document.getElementById('app')
);