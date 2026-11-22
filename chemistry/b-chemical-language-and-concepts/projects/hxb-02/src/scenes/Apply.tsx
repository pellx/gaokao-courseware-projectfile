import React from 'react';
import {AutoScene} from '../components/auto';

export const Apply: React.FC = () => <AutoScene k="apply" d={{"tag": "考点五", "title": "物质转化的应用", "blocks": [{"t": "rule", "tag": "选路线", "at": "ap1", "text": "原料{易得}、条件{简单}、产物{好分离}", "c": "green"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "工业制 NaOH", "at": "ap2", "lines": ["{电解饱和食盐水}（氯碱工业）", "旧法：Na2CO3 + Ca(OH)2", "不用 Na2O + H2O（成本高）"], "c": "orange"}]}, {"blocks": [{"t": "panel", "title": "复分解发生条件", "at": "ap3", "lines": ["生成{沉淀}", "生成{气体}", "生成{水}", "三者有其一即可"], "c": "red"}]}]}], "callout": {"label": "考法", "at": "ap4", "text": "判断转化能否{一步实现}，或选出最合理的制备路线"}}} />;
