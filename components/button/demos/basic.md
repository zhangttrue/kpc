---
title: 按钮类型
order: 0
---

有如下几种类型：默认按钮，主按钮，次按钮，警告按钮，危险按钮，成功按钮，文字按钮，超链接按钮

```vdt
import {Button} from 'kpc';

<div>
    <Button>default</Button>
    <Button type="primary">primary</Button>
    <Button type="secondary">secondary</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
    <Button type="success">success</Button>
    <Button type="none">none</Button>
    <Button type="link">link</Button>
</div>
```

```styl
.k-btn
    margin-right 20px
```
