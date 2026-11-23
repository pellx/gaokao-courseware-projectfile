import React from 'react';
import {AutoScene} from '../components/auto';

export const Trouble: React.FC = () => <AutoScene k="trouble" d={{"tag": "考点九", "title": "核式结构模型的困难", "blocks": [{"t": "table", "at": "i1", "head": ["经典理论的推论", "实验事实"], "cols": "1fr 1fr", "rows": [{"at": "i2", "cells": ["电子落到核上，原子{不稳定}", "原子是{稳定}的"]}, {"at": "i3", "cells": ["光谱是{连续谱}", "光谱是{线状谱}"]}], "size": 32, "rowHeight": 70}], "callout": {"label": "要点", "at": "i5", "text": "解释不了{稳定性}和{线状谱}"}, "beat": {"k": "box", "at": "i4b", "text": "经典理论：\n原子{不稳定|red}"}}} />;
