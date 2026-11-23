import React from 'react';
import {AutoScene} from '../components/auto';

export const End: React.FC = () => <AutoScene k="end" d={{"tag": "考点八", "title": "实验结论", "blocks": [{"t": "big", "at": "n1", "text": "g 测量值 ≈ {当地公认值}", "size": 44}, {"t": "big", "at": "n2", "text": "T^2 ∝ l：验证了{周期与摆长的关系}", "size": 38, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "要点", "at": "n3", "text": "g 约为 {9.8 m/s^2}，随纬度、海拔略有不同"}, "beat": {"k": "yay", "at": "n2b", "text": "结果与公认值相符\n实验{成功|red}"}}} />;
