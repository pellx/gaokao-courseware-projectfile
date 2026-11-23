import React from 'react';
import {AutoScene} from '../components/auto';

export const Disc: React.FC = () => <AutoScene k="disc" d={{"tag": "考点五", "title": "对结果的讨论", "blocks": [{"t": "table", "at": "d1", "head": ["质量关系", "入射球 m_1", "被碰球 m_2"], "cols": "1.2fr 1.5fr 1.5fr", "rows": [{"at": "d1", "cells": ["m_1 = m_2", "{停下}", "以 v_1 前进"]}, {"at": "d2", "cells": ["m_1 > m_2", "继续{向前}", "向前"]}, {"at": "d3", "cells": ["m_1 < m_2", "{反弹}", "向前"]}, {"at": "d4", "cells": ["m_1 ≪ m_2", "几乎以{原速率弹回}", "几乎不动"]}], "size": 30, "rowHeight": 72}], "callout": {"label": "要点", "at": "d5", "text": "等质量弹性正碰：{交换速度}"}, "beat": {"k": "cradle", "at": "d4b", "text": "一只撞过去自己停下\n速度{传给另一只|red}"}}} />;
