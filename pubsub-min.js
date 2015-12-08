/*
 * JavaScript Document
 * ps.js
 * Created on 2015年10月22日 下午1:59:23
 * Copyright (c)   All Rights Reserved.
 * @auth xsTao
 * @desc:
 *  website:  http://blog.seoui.com/
    demo:     http://peachyy.github.io/pubsub/
 * 	 一个WEB前端发布(publish) 订阅(subscribe) 的小组件 不需要第3方库的依赖
 *  * 支持像jquery一样的链式调用风格
 *  *使用ps.pub / ps.publish    发布事件通知
 *  *使用ps.sub /ps.subscribe   订阅通知
 *  *使用ps.unsub /ps.unsubscribe 取消已订阅的事件通知
 *   ps.setDebug()调试模式开关
 */

!function(e,t){function u(e){return Array.prototype.slice.call(e)}function a(e){if(window.console&&console.log&&i===!0){var t=new Date;console.log("["+t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+"]	"+e)}}function f(){if(document.documentMode&&document.documentMode<9){var e=Array.prototype.splice;Array.prototype.splice=function(){var t=[],n=0,r=arguments.length;for(;n<r;n++)t.push(arguments[n]);return t.length==1&&t.push(this.length-t[0]),e.apply(this,t)}}}var n={},r={},i=!1,s=1,o="pubAndSub-";f(),n.publish=n.pub=function(){var e=u(arguments);if(e.length<=0)throw new Error("广播事件必须要指定事件类型");var t=e[0],n=r[t];if(!n)return;var i={event:t,args:e.splice(1)},s=n.length;for(var o=0;o<s;o++)i.token=n[o].token,n[o].callback.apply(i,i.args);return this},n.subscribe=n.sub=function(e,t){var n=r[e]=r[e]||[],i=o+s++;return n.push({token:i,callback:t}),i},n.unsubscribe=n.unsub=function(){var e=0,t=0,n=u(arguments),i=n[0],s=r[i];if(!s)return;for(e,t=s.length;e<t;e++){var o=n[1];if(typeof o=="function"&&s[e].callback===o)return r[i].splice(e,1),a("remove success[key:"+i+",token:"+o+"] by fun"),this;if(typeof o=="string"&&s[e].token===o)return r[i].splice(e,1),a("remove success[key:"+i+",token:"+o+"] by token"),this}return this},n.getsubsmembers=function(){return r},n.setDebug=function(e){i=e},e[t?t:"ps"]=n}(window,undefined),define("pubsub",function(){});