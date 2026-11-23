import React from 'react';
import {AutoScene} from '../components/auto';

export const Measure: React.FC = () => <AutoScene k="measure" d={{"tag": "考点六", "title": "功是能量转化的量度", "blocks": [{"t": "table", "at": "f1", "head": ["功", "对应的能量变化"], "cols": "1fr 1.4fr", "rows": [{"at": "f1", "cells": ["合力做功", "{动能}变化"]}, {"at": "f2", "cells": ["重力做功", "{重力势能}变化"]}, {"at": "f3", "cells": ["弹力做功", "{弹性势能}变化"]}], "size": 32, "rowHeight": 60}], "callout": {"label": "要点", "at": "f4", "text": "功是{能量转化}的量度"}}} />;
