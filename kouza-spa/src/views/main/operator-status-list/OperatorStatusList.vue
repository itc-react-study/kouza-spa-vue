<template>
  <div class="operator-status">
    <div className="operator-status-list">
      <div className="operator-status-list-div">
        <div className="operator-status-list-div-left">
          <span>拠点別</span>
        </div>
        <div className="operator-status-list-div-right">
          <a-select v-model:value="location" style="width: 100%">
            <a-select-option :key="index" v-for="(item, index) in locationCd" :value="item.code">
              {{ item.label }}</a-select-option
            >
          </a-select>
        </div>
      </div>

      <div className="operator-status-list-div">
        <div className="operator-status-list-div-left">
          <span>権限スキル</span>
        </div>
        <div className="operator-status-list-div-right">
          <a-select v-model:value="role" style="width: 100%">
            <a-select-option :key="index" v-for="(item, index) in roleCd" :value="item.code">
              {{ item.label }}</a-select-option
            >
          </a-select>
        </div>
      </div>

      <div className="operator-status-list-div">
        <div className="operator-status-list-div-left">
          <span>業務スキル</span>
        </div>
        <div className="operator-status-list-div-right">
          <a-select v-model:value="businessRole" style="width: 100%">
            <a-select-option :key="index" v-for="(item, index) in businessRoleCd" :value="item.code">
              {{ item.label }}</a-select-option
            >
          </a-select>
        </div>
      </div>

      <div className="operator-status-list-div">
        <div className="operator-status-list-div-left">
          <span>ステータス</span>
        </div>
        <div className="operator-status-list-div-right">
          <a-select v-model:value="treatmentStatus" style="width: 100%">
            <a-select-option :key="index" v-for="(item, index) in treatmentStatusCd" :value="item.code">
              {{ item.label }}</a-select-option
            >
          </a-select>
        </div>
      </div>

      <div className="operator-status-list-div">
        <div className="operator-status-list-div-left">
          <span>店番 </span>
        </div>
        <div className="operator-status-list-div-right">
          <a-input v-model:value="value1" />
        </div>
      </div>

      <div className="operator-status-list-div">
        <div className="operator-status-list-div-left">
          <span>店名 </span>
        </div>
        <div className="operator-status-list-div-right">
          <a-input v-model:value="value2" />
        </div>
      </div>

      <div className="operator-status-list-div"></div>

      <div className="operator-status-list-div"></div>

      <div className="operator-status-list-div">
        <div className="operator-status-list-div-left"></div>
        <div className="operator-status-list-div-right">
          <a-button type="primary">検索</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//  使用组合式 API

import {
  BUSINESS_ROLE,
  CODE_LOCATION_CD,
  ROLE_CD,
  TREATMENT_STATUS
} from '@/constants/code-list.constants'
import { reactive, ref } from 'vue'

const value1 = ref('')

const value2 = ref('')

const location = ref('')

const locationCd = reactive(CODE_LOCATION_CD)

const role = ref('')

const roleCd = reactive(ROLE_CD)

const businessRole = ref('')

const businessRoleCd = reactive(BUSINESS_ROLE)

const treatmentStatus = ref('')

const treatmentStatusCd = reactive(TREATMENT_STATUS)
</script>

<style>
.operator-status-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 140px;
  padding: 14px 14px 0px 14px;
  border: 1px solid #e3e3e3;
}

.renderAcceptanceNo {
  color: #1890ff;
  text-decoration: underline;
  cursor: pointer;
}

.transactions-list-table {
  height: calc(100vh - 460px);
}

.operator-status-list-div {
  display: flex;
  align-items: center;
}

.operator-status-list-div-left {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  flex: 3;
}

.operator-status-list-div-left span {
  font-weight: bold;
}

.operator-status-list-div-right {
  display: flex;
  justify-content: flex-end;
  flex: 7;
  height: 30px;
}

.transactions-list-subTable {
  display: flex;
  align-items: center;
  margin: 12px 0px;
}

.transactions-list-subTable-left {
  flex: 9;
}

.transactions-list-subTable-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  height: 64px;
  padding-right: 14px;
  border: 1px solid #e3e3e3;
  border-left: none;
}

.transactions-list-information {
  height: 142px;
  padding: 10px 15px 6px;
  margin-top: 10px;
  border: 1px solid #e3e3e3;
}

.transactions-list-information-button {
  display: flex;
  align-items: center;
  height: 30px;
}

.transactions-list-information-button p {
  margin-right: 10px;
}

.transactions-list-information-textArea {
  margin-top: 10px;
}
</style>
