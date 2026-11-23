import React from 'react';
import {AutoScene} from '../components/auto';

export const Classic: React.FC = () => <AutoScene k="classic" d={{"tag": "考点三", "title": "经典理论的困难", "blocks": [{"t": "table", "at": "c2", "head": ["经典理论的推论", "实验事实"], "cols": "1fr 1fr", "rows": [{"at": "c2", "cells": ["原子{不稳定}", "原子{稳定}"]}, {"at": "c3", "cells": ["{连续谱}", "{线状谱}"]}], "size": 34, "rowHeight": 72}], "callout": {"label": "要点", "at": "c5", "text": "解释不了{稳定性}和{分立特征}"}}} />;
