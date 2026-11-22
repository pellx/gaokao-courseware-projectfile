import React from 'react';
import {AutoScene} from '../components/auto';

export const Di: React.FC = () => <AutoScene k="di" d={{"tag": "考点六", "title": "二元取代物数目：定一移一", "blocks": [{"t": "big", "at": "di1", "text": "{定一移一}，避免重复", "size": 46}, {"t": "text", "at": "di2", "text": "丙烷二氯代物：{4 种}", "size": 34, "center": true}, {"t": "table", "at": "di3", "head": ["苯环上的取代基", "异构体数"], "cols": "2fr 1fr", "rows": [{"at": "di3", "cells": ["两个相同（—X、—X）", "{3}"]}, {"at": "di3", "cells": ["三个，两个相同（—X、—X、—Y）", "{6}"]}, {"at": "di3", "cells": ["三个都不同", "10"]}], "size": 31, "rowHeight": 58}], "callout": {"label": "易错", "at": "di4", "text": "移动的取代基{不回到已固定过的位置}"}}} />;
