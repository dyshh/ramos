import React, { useEffect } from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import Sider from '../Sider'
import ChatPanel from '../ChatPanel'
import ChatList from '../ChatList'
import styles from './index.module.scss'
import io from '../../websocket'
import OnlineList from '../OnlineList'

declare global {
    interface Window {
        socket: any
    }
}

function App({ chatStore }: IAllStore) {
    useEffect(() => {
        init()
    }, [])

    function init() {
        // 挂载到window
        window.socket = io()
    }

    return (
        <div className={styles.bg}>
            <div className={styles.app}>
                <div className={styles.layout}>
                    <Sider />
                    <ChatList />
                    <ChatPanel />
                </div>
                <OnlineList />
            </div>
        </div>
    )
}

export default inject(
    ({ chatStore }: IAllStore): IAllStore => {
        return {
            chatStore
        }
    }
)(observer(App))
