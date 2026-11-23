import React from 'react';
import {AutoScene} from '../components/auto';

export const Drive: React.FC = () => <AutoScene k="drive" d={{"tag": "考点五", "title": "电磁驱动", "blocks": [{"t": "chain", "steps": [{"at": "e1", "text": "磁场转动", "c": "orange"}, {"at": "e2", "text": "导体中有感应电流", "c": "red"}, {"at": "e2", "text": "导体跟着转", "c": "orange"}], "arrows": []}, {"t": "rule", "tag": "转速", "at": "e3", "text": "导体转速{小于}磁场转速", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "e4", "text": "应用：{交流感应电动机}"}, "beat": {"k": "carrot", "at": "e3b", "text": "跟着跑，总慢一步\n转速{小于|red}磁场"}}} />;
