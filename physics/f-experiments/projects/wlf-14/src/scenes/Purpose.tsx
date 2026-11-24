import React from 'react';
import {AutoScene} from '../components/auto';

export const Purpose: React.FC = () => <AutoScene k="purpose" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "测电压", "at": "a1", "lines": ["直流电压挡"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "测电流", "at": "a1", "lines": ["直流电流挡"], "c": "orange", "size": 34}]}, {"blocks": [{"t": "panel", "title": "测电阻", "at": "a1", "lines": ["欧姆挡"], "c": "red", "size": 34}]}]}, {"t": "big", "at": "a2", "text": "测二极管的{正向电阻}和{反向电阻}", "size": 42}, {"t": "text", "at": "a3", "text": "一只表测多个量：用{选择开关}切换功能和量程", "size": 34, "center": true}], "callout": {"label": "要点", "at": "a4", "text": "先把选择开关旋到{对应挡位}"}}} />;
