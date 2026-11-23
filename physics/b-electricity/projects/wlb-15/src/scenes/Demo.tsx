import React from 'react';
import {AutoScene} from '../components/auto';

export const Demo: React.FC = () => <AutoScene k="demo" d={{"tag": "考点五", "title": "洛伦兹力演示仪", "blocks": [{"t": "chain", "steps": [{"at": "e1", "text": "电子枪发射电子", "c": "red"}, {"at": "e2", "text": "励磁线圈产生磁场", "c": "orange"}, {"at": "e2", "text": "径迹为圆", "c": "red"}], "arrows": []}, {"t": "table", "at": "e3", "head": ["操作", "变化的量", "半径"], "cols": "1fr 1fr 1fr", "rows": [{"at": "e3", "cells": ["增大加速电压", "v 变大", "{变大}"]}, {"at": "e4", "cells": ["增大励磁电流", "B 变大", "{变小}"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "要点", "at": "e5", "text": "电压大半径大，电流大半径{小}"}}} />;
