import React from 'react';
import {AutoScene} from '../components/auto';

export const VRead: React.FC = () => <AutoScene k="vread" d={{"tag": "考点五", "title": "游标卡尺的读数", "blocks": [{"t": "big", "at": "v3", "text": "读数 = {整毫米数} + {对齐序号 × 精度|orange}", "size": 44}, {"t": "items", "items": [{"at": "v1", "text": "整毫米数：看游标{零刻线左侧}的主尺刻度"}, {"at": "v2", "text": "序号：游标上与主尺{对齐}的那条刻线"}, {"at": "v3", "text": "例：21 mm + 8 × 0.05 mm = {21.40 mm}"}], "size": 32}], "callout": {"label": "易错", "at": "v4", "text": "游标卡尺{不估读}；21.40 mm 末尾的 0 不能丢"}, "beat": {"k": "face", "at": "v3b", "text": "找{正好对齐|red}的\n那一条刻线"}}} />;
