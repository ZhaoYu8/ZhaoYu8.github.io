(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ReviewDepot"],{"4dbb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"outdepot box"},[a("Panel",{attrs:{arr:e.arr}},[a("el-col",{staticClass:"d-f-e",attrs:{span:4}},[a("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1),a("div",{staticClass:"pt-10 table"},[a("el-table",{ref:"firstTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},e._l(e.tableHeader,(function(t,i){return a("el-table-column",{key:t.label+i,attrs:{"header-align":"center",label:t.label,width:t.width},scopedSlots:e._u([{key:"default",fn:function(i){return["outbound_task_serial"===t.id?["outbound_task_serial"===t.id?a("el-link",{attrs:{type:"primary"},on:{click:function(t){return e.update(i.row)}}},[e._v(e._s(i.row[t.id]))]):e._e()]:["input"===t.type?a("el-input",{directives:[{name:"focus",rawName:"v-focus"}],model:{value:i.row[t.id],callback:function(a){e.$set(i.row,t.id,a)},expression:"scope.row[item.id]"}}):"serial"===t.type?a("div",{staticClass:"t-c"},[e._v(e._s(i.$index+1))]):a("div",[e._v(e._s(i.row[t.id]))])]]}}],null,!0)})})),1)],1),a("el-pagination",{staticClass:"pagination mr-10",attrs:{background:"",layout:"total, prev, pager, next, jumper",total:e.total,"page-size":20,"current-page":e.currentPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.currentChange}}),a("el-dialog",{staticClass:"dialog",attrs:{title:"",visible:e.dialogVisible,width:"95%",top:"5vh","close-on-click-modal":!1},on:{close:function(t){e.dialogVisible=!1}}},[a("AddOutDepot",{directives:[{name:"show",rawName:"v-show",value:e.addOrDeatil,expression:"addOrDeatil"}],on:{cancel:e.cancel,detail:e.detail}}),a("DetailOutDepot",{directives:[{name:"show",rawName:"v-show",value:!e.addOrDeatil,expression:"!addOrDeatil"}],attrs:{detailData:e.detailData},on:{update:e.update,cancel:e.cancel}})],1)],1)},n=[],r=(a("d81d"),a("5530")),l=(a("96cf"),a("1da1")),d=a("55a1"),o=a("0820"),s={name:"outDepot",data:function(){return{detailData:{},dialogVisible:!1,addOrDeatil:!0,currentPage:1,total:1,arr:[{label:"仓库",model:"",placeholder:"",type:"select",data:[],id:"inbound_warehouse_id"},{label:"仓位",model:"",placeholder:"",type:"page",data:[],id:"warehouse_location_id"},{label:"客户",model:"",placeholder:"",type:"page",data:[],id:"customer_id"},{label:"销售",model:"",placeholder:"",type:"select",data:[],id:"saler_id"},{label:"负责人",model:"",placeholder:"",type:"select",data:[],id:"member_id"},{label:"发货时间",model:"",placeholder:"",type:"daterange",span:8,id:"delivery_date_min"},{label:"关键字",model:"",placeholder:"订单编号/产品名称/收货人/收货单位",id:"query_key"}],tableData:[],tableHeader:[{label:"序号",id:"id",width:70,type:"serial"},{label:"发货时间",id:"delivery_date"},{label:"收货人",id:"contact_name"},{label:"收货单位",id:"contact_company"},{label:"客户",id:"customer_name"},{label:"出库单号",id:"outbound_task_serial"},{label:"发货总数",id:"outbound_number"},{label:"当前状态",id:"status_name"},{label:"更新时间",id:"updated_at"},{label:"最后操作人",id:"updator"}]}},components:{AddOutDepot:d["a"],DetailOutDepot:o["a"]},methods:{detail:function(e){this.addOrDeatil=!1,this.dialogVisible=!1,this.query()},update:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$post("outbound_tasks/for_show",{id:e.id});case 2:i=a.sent,i=i.data.data,t.addOrDeatil=!0,t.dialogVisible=!0,t.$nextTick((function(){t.$bus.$emit("panelShow",{outbound_task:i.outbound_task,tableData:i.products,id:e.id,type:1})}));case 7:case"end":return a.stop()}}),a)})))()},cancel:function(e){this.dialogVisible=!1,e||this.query()},detailChange:function(e){var t=this;this.detailData=e,this.dialogVisible=!0,this.addOrDeatil=!1,this.$nextTick((function(){t.$bus.$emit("detailShow",e)}))},panelChange:function(){var e=this;this.addOrDeatil=this.dialogVisible=!0,this.$nextTick((function(){e.$bus.$emit("panelShow")}))},query:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(r["a"])(Object(r["a"])({},e.$common.querySql.call(e,e.arr)),{page:e.currentPage,status:1}),a.delivery_date_min&&(a.delivery_date_max=moment(a.delivery_date_min[1]).format("YYYY-MM-DD"),a.delivery_date_min=moment(a.delivery_date_min[0]).format("YYYY-MM-DD")),t.next=4,e.$post("outbound_tasks/list",a);case 4:i=t.sent,e.tableData=i.data.data.items,e.total=i.data.data.paginate_meta.total_count;case 7:case"end":return t.stop()}}),t)})))()},currentChange:function(e){this.currentPage=e,this.query()},init:function(){var e=this,t=this.$vuexData.x;this.arr[0].data=t.warehouse,this.arr[1].data=t.location,this.arr[2].data=t.customer,[3,4].map((function(a){e.arr[a].data=t.member}))}},mounted:function(){var e=this;this.query(),this.init(),this.$bus.$on("user",(function(){e.init()}))}},u=s,c=(a("6d09"),a("0c7c")),p=Object(c["a"])(u,i,n,!1,null,"977b1b74",null);t["default"]=p.exports},"6d09":function(e,t,a){"use strict";var i=a("af70"),n=a.n(i);n.a},af70:function(e,t,a){}}]);