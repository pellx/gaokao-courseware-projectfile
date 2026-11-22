import React from 'react';
import {AutoScene} from '../components/auto';

export const Alkyl: React.FC = () => <AutoScene k="alkyl" d={{"tag": "考点一", "title": "烃基与习惯命名", "blocks": [{"t": "table", "at": "ak1", "head": ["烃基", "结构简式"], "cols": "1fr 1.6fr", "rows": [{"at": "ak1", "cells": ["甲基", "—CH3"]}, {"at": "ak1", "cells": ["乙基", "—CH2CH3"]}, {"at": "ak1", "cells": ["丙基", "—CH2CH2CH3"]}, {"at": "ak4", "cells": ["{异丙基}", "—CH(CH3)2"]}], "size": 32, "rowHeight": 58}, {"t": "text", "at": "ak2", "text": "习惯命名：正戊烷、{异戊烷}、新戊烷", "size": 32, "center": true}], "callout": {"label": "易错", "at": "ak4", "text": "异丙基：连接点在{中间碳}"}}} />;
