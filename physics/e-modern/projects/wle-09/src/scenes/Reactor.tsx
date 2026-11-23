import React from 'react';
import {AutoScene} from '../components/auto';

export const Reactor: React.FC = () => <AutoScene k="reactor" d={{"tag": "考点三", "title": "核反应堆", "blocks": [{"t": "table", "at": "c1", "head": ["部件", "作用"], "cols": "1fr 2fr", "rows": [{"at": "c1", "cells": ["铀棒", "{燃料}"]}, {"at": "c2", "cells": ["慢化剂", "石墨、重水、普通水：使中子{减速}"]}, {"at": "c3", "cells": ["镉棒", "{吸收中子}，控制反应速度"]}], "size": 34, "rowHeight": 72}], "callout": {"label": "易错", "at": "c4", "text": "慢化剂{减速}，镉棒{吸收}"}}} />;
