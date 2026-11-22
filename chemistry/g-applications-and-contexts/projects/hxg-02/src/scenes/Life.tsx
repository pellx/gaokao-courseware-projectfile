import React from 'react';
import {AutoScene} from '../components/auto';

export const Life: React.FC = () => <AutoScene k="life" d={{"tag": "考点六", "title": "药物、洗涤剂与化肥", "blocks": [{"t": "items", "items": [{"at": "li1", "text": "治胃酸：NaHCO3、Al(OH)3；钡餐：{BaSO4}，不用 BaCO3"}, {"at": "li1b", "text": "防疫与诊疗：{消毒剂}、检测试剂、疫苗"}, {"at": "li2", "text": "热纯碱去油污：{加热促进水解}"}, {"at": "li3", "text": "{铵态氮肥不与草木灰混用}：相互促进水解"}], "size": 32}], "callout": {"label": "解题方法", "at": "li4", "text": "先找{对应的化学原理}"}, "beat": {"k": "akari", "at": "li3b", "text": "生活小常识\n{背后都是原理|red}"}}} />;
