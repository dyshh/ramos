import { observable, action, runInAction } from 'mobx'
import { message } from 'antd'
import { isEmpty } from 'lodash'

export class GlobalStore {
    @observable onlineList: IGlobalStore.onlineListItem[] = []
    @observable offlineList: IGlobalStore.onlineListItem[] = []
    @observable onlineListVisible: boolean = false

    @action
    setOnlineListVisible = (onlineListVisible: boolean) => {
        this.onlineListVisible = onlineListVisible
    }

    @action
    setOnlineList = (list: IGlobalStore.onlineListItem[]) => {
        this.onlineList = list
    }

    @action
    setOfflineList = (list: IGlobalStore.onlineListItem[]) => {
        this.offlineList = list
    }

    @observable searchListVisible: boolean
    @action
    setSearchListVisible = (visible: boolean) => {
        this.searchListVisible = visible
    }
}

export default new GlobalStore()
