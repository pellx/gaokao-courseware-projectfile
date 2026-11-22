import React from 'react';
import {AutoScene} from '../components/auto';

export const Protect: React.FC = () => <AutoScene k="protect" d={{"tag": "考点五", "title": "官能团的保护", "blocks": [{"t": "table", "at": "pr1", "head": ["被保护的官能团", "保护方法"], "cols": "1.2fr 2.4fr", "rows": [{"at": "pr2", "cells": ["{酚羟基}", "与 CH3I 成醚或与 NaOH 成盐，最后恢复"]}, {"at": "pr3", "cells": ["{碳碳双键}", "与 HCl 加成，最后消去恢复"]}, {"at": "pr3", "cells": ["醛基", "与醇生成缩醛"]}], "size": 31, "rowHeight": 70}], "callout": {"label": "考法", "at": "pr4", "text": "“目的”：{保护某官能团，防止被氧化}"}, "beat": {"k": "hug", "at": "pr3b", "text": "先{护在怀里|red}\n危险过去再放开"}}} />;
