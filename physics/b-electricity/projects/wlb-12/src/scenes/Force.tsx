import React from 'react';
import {AutoScene} from '../components/auto';

export const Force: React.FC = () => <AutoScene k="force" d={{"tag": "考点一", "title": "安培力与左手定则", "blocks": [{"t": "table", "at": "a3", "head": ["左手", "对应"], "cols": "1fr 2fr", "rows": [{"at": "a3", "cells": ["掌心", "磁感线{垂直穿入}"]}, {"at": "a4", "cells": ["四指", "{电流}方向"]}, {"at": "a4", "cells": ["拇指", "{安培力}方向"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "易错", "at": "a5", "text": "安培力：{左手}　电流的磁场：右手"}}} />;
