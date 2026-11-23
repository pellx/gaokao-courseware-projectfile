import React from 'react';
import {AutoScene} from '../components/auto';

export const Scope: React.FC = () => <AutoScene k="scope" d={{"tag": "考点七", "title": "示波管的原理", "blocks": [{"t": "table", "at": "g1", "head": ["偏转电极", "所加电压", "作用"], "cols": "1fr 1fr 1fr", "rows": [{"at": "g1", "cells": ["YY′", "{信号电压}", "竖直偏转"]}, {"at": "g2", "cells": ["XX′", "{扫描电压}", "水平匀速扫描"]}], "size": 30, "rowHeight": 64}, {"t": "rule", "tag": "条件", "at": "g3", "text": "两者{周期相同}，显示一个周期的波形", "c": "red", "size": 32}], "callout": {"label": "要点", "at": "g4", "text": "YY′ 信号，XX′ 扫描，{周期相同}"}}} />;
