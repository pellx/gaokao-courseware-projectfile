import React from 'react';
import {AutoScene} from '../components/auto';

export const Balance: React.FC = () => <AutoScene k="balance" d={{"tag": "考点三", "title": "补偿阻力", "blocks": [{"t": "chain", "steps": [{"at": "b2", "text": "垫高{不带滑轮}的一端"}, {"at": "b2", "text": "{不挂槽码}，拖着纸带"}, {"at": "b3", "text": "小车{匀速}：点迹{均匀}"}], "arrows": []}, {"t": "big", "at": "b4", "text": "重力沿斜面的分力　{补偿}　阻力", "size": 40}], "callout": {"label": "易错", "at": "b5", "text": "不挂槽码、拖纸带；改变质量后{不必重新补偿}"}}} />;
