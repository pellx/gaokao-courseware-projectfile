import React from 'react';
import {AutoScene} from '../components/auto';

export const Ceramic: React.FC = () => <AutoScene k="ceramic" d={{"tag": "考点四", "title": "新型陶瓷", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "碳化硅 SiC", "at": "ce1", "lines": ["俗称{金刚砂}", "共价晶体，硬度大", "砂纸、砂轮"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "氮化硅 Si3N4", "at": "ce2", "lines": ["耐高温、耐磨", "发动机部件"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "ce3", "text": "高温结构陶瓷、压电陶瓷、透明陶瓷、超导陶瓷", "size": 32, "center": true, "c": "muted"}], "callout": {"label": "易错", "at": "ce4", "text": "SiC、Si3N4 {不是硅酸盐}，是新型无机非金属材料"}}} />;
