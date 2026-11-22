import React from 'react';
import {AutoScene} from '../components/auto';

export const Safety: React.FC = () => <AutoScene k="safety" d={{"tag": "考点六", "title": "实验安全", "blocks": [{"t": "table", "at": "sf1", "head": ["防什么", "怎么做"], "cols": "1fr 3fr", "rows": [{"at": "sf1", "cells": ["{防倒吸}", "NH3、HCl 用倒扣漏斗或干燥管吸收"]}, {"at": "sf2", "cells": ["防暴沸", "碎瓷片；{浓硫酸注入水中}"]}, {"at": "sf3", "cells": ["{防爆炸}", "可燃性气体点燃前{验纯}"]}, {"at": "sf3c", "cells": ["标识与废弃物", "认识易燃、腐蚀、有毒标识；废液{分类回收}"]}], "size": 32, "rowHeight": 70}], "callout": {"label": "易错", "at": "sf4", "text": "水倒进浓硫酸：{沸腾飞溅}"}, "beat": {"k": "conductor", "at": "sf3b", "text": "像指挥乐队\n{顺序错一步就出事|red}"}}} />;
