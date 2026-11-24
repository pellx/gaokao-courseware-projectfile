import React from 'react';
import {AutoScene} from '../components/auto';

export const RedBlack: React.FC = () => <AutoScene k="redblack" d={{"tag": "考点五", "title": "红进黑出", "blocks": [{"t": "chain", "steps": [{"at": "e1", "text": "{红表笔}流入"}, {"at": "e1", "text": "表内"}, {"at": "e1", "text": "{黑表笔}流出"}], "arrows": ["电流", "电流"], "size": 38}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "测电压、电流", "at": "e1", "lines": ["电流来自{外电路}", "红表笔接{高电势}"], "c": "orange", "size": 36}]}, {"blocks": [{"t": "panel", "title": "欧姆挡", "at": "e2", "lines": ["电流来自{表内电池}", "{黑表笔}接电池{正极}"], "c": "red", "size": 36}]}]}], "callout": {"label": "易错", "at": "e3", "text": "欧姆挡：{黑表笔接内部电池正极}"}, "beat": {"k": "cable", "at": "e2b", "text": "红色那头进、黑色那头出\n{红进黑出|red}"}}} />;
