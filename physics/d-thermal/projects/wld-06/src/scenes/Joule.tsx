import React from 'react';
import {AutoScene} from '../components/auto';

export const Joule: React.FC = () => <AutoScene k="joule" d={{"tag": "考点一", "title": "焦耳的实验", "blocks": [{"t": "rule", "tag": "绝热过程", "at": "j2", "text": "系统与外界{不传热}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "机械功", "at": "j1", "lines": ["重物下落", "带动叶片{搅水}"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "电功", "at": "j1", "lines": ["电流通过电阻丝", "给水{加热}"], "c": "red", "size": 32}]}]}, {"t": "big", "at": "j3", "text": "同一初态 → 同一末态：做功{相同}", "size": 42}], "callout": {"label": "要点", "at": "j4", "text": "做功多少只由{始末状态}决定，与方式无关"}}} />;
