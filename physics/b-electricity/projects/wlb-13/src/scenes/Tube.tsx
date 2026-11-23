import React from 'react';
import {AutoScene} from '../components/auto';

export const Tube: React.FC = () => <AutoScene k="tube" d={{"tag": "考点六", "title": "电子束的磁偏转", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "电子枪发射电子", "c": "orange"}, {"at": "f2", "text": "偏转线圈的磁场", "c": "red"}, {"at": "f2", "text": "荧光屏发光", "c": "orange"}], "arrows": []}, {"t": "rule", "tag": "扫描", "at": "f3", "text": "偏转磁场的强弱和方向{不断变化}", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "f4", "text": "显像管：{洛伦兹力}使电子束偏转"}}} />;
