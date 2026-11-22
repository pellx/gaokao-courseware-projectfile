import React from 'react';
import {AutoScene} from '../components/auto';

export const Trap: React.FC = () => <AutoScene k="trap" d={{"tag": "考点八", "title": "易错辨析", "blocks": [{"t": "mark", "ok": false, "at": "tr1", "text": "淀粉与纤维素互为同分异构体", "size": 33}, {"t": "mark", "ok": false, "at": "tr2", "text": "油脂、蔗糖属于高分子", "size": 33}, {"t": "mark", "ok": true, "at": "tr2", "text": "淀粉、纤维素、蛋白质、核酸是高分子", "size": 33}, {"t": "mark", "ok": false, "at": "tr3", "text": "纤维素能为人体提供能量", "size": 33}], "callout": {"label": "解题方法", "at": "tr4", "text": "高分子：{相对分子质量上万}"}}} />;
