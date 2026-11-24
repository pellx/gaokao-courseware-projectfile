import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点八", "title": "传感器的应用", "blocks": [{"t": "table", "at": "u1", "head": ["领域", "例子"], "cols": "1fr 2fr", "rows": [{"at": "u1", "cells": ["家用电器", "空调、冰箱：{温度传感器}"]}, {"at": "u2", "cells": ["智能手机", "光线、加速度、距离传感器"]}, {"at": "u3", "cells": ["汽车、工业、医疗", "自动控制、检测、监护"]}], "size": 36, "rowHeight": 96}], "callout": {"label": "要点", "at": "u4", "text": "先看感受{什么量}，再看转换成{什么电学量}"}}} />;
