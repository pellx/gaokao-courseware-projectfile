import React from 'react';
import {AutoScene} from '../components/auto';

export const Change: React.FC = () => <AutoScene k="change" d={{"tag": "考点一", "title": "古籍中的物理变化与化学变化", "blocks": [{"t": "table", "at": "ch1", "head": ["诗句或记载", "变化"], "cols": "2.6fr 1.2fr", "rows": [{"at": "ch1", "cells": ["烈火焚烧若等闲（煅烧石灰石）", "{化学变化}"]}, {"at": "ch2", "cells": ["蜡炬成灰 / 泪始干（熔化）", "化学 / {物理|orange}"]}, {"at": "ch3", "cells": ["丹砂烧之成水银", "{化学变化}"]}, {"at": "ch4", "cells": ["铁杵磨成针", "物理变化"]}], "size": 30, "rowHeight": 62}], "callout": {"label": "易错", "at": "ch4", "text": "判断唯一标准：{有无新物质生成}"}, "beat": {"k": "jump", "at": "ch3b", "text": "古诗里的化学\n看{有没有新物质|red}"}}} />;
