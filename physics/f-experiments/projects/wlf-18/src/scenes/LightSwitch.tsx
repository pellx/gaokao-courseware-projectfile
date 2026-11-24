import React from 'react';
import {AutoScene} from '../components/auto';

export const LightSwitch: React.FC = () => <AutoScene k="lightswitch" d={{"tag": "考点六", "title": "光控开关", "blocks": [{"t": "chain", "steps": [{"at": "s2", "text": "天暗"}, {"at": "s2", "text": "阻值{增大}"}, {"at": "s2", "text": "控制电路动作", "c": "orange"}, {"at": "s2", "text": "灯{点亮}"}], "arrows": []}, {"t": "chain", "steps": [{"at": "s3", "text": "天亮"}, {"at": "s3", "text": "阻值{减小}"}, {"at": "s3", "text": "控制电路动作", "c": "orange"}, {"at": "s3", "text": "灯{熄灭}"}], "arrows": []}], "callout": {"label": "要点", "at": "s4", "text": "路灯：天黑{自动亮}，天亮自动灭"}, "beat": {"k": "torch", "at": "s3b", "text": "周围一暗\n{灯就亮|red}"}}} />;
