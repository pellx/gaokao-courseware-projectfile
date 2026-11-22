import React from 'react';
import {AutoScene} from '../components/auto';

export const Trap: React.FC = () => <AutoScene k="trap" d={{"tag": "考点七", "title": "常见陷阱", "blocks": [{"t": "table", "at": "tr1", "head": ["关键词", "考点"], "cols": "1.8fr 2fr", "rows": [{"at": "tr1", "cells": ["雾、烟、豆浆、日照生紫烟", "{胶体，丁达尔效应}"]}, {"at": "tr2", "cells": ["火树银花、紫青烟起", "{焰色}，物理变化"]}, {"at": "tr3", "cells": ["冶炼、燃烧、置换", "{氧化还原}"]}], "size": 31, "rowHeight": 66}], "callout": {"label": "答题模板", "at": "tr4", "text": "先{翻译成现代化学语言}"}}} />;
