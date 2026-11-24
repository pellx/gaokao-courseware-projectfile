import React from 'react';
import {AutoScene} from '../components/auto';

export const Net: React.FC = () => <AutoScene k="net" d={{"tag": "考点四", "title": "回复力与合力", "blocks": [{"t": "table", "at": "n1", "head": ["最低点", "大小", "说明"], "cols": "1.2fr 1fr 2fr", "rows": [{"at": "n1", "cells": ["回复力", "{为 0}", "位移为 0"]}, {"at": "n2", "cells": ["合力", "{不为 0}", "提供向心力，拉力 > 重力"]}], "size": 32, "rowHeight": 80}, {"t": "big", "at": "n3", "text": "平衡位置 ≠ {平衡状态}", "size": 48}], "callout": {"label": "易错", "at": "n4", "text": "回复力为 0，合力{不为 0}"}}} />;
