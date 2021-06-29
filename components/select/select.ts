import {
    findDomFromVNode,
    Children,
    TypeDefs,
} from 'intact';
import template from './select.vdt';
import {bind, eachChildren, isComponentVNode} from '../utils';
import {isNullOrUndefined} from 'intact-shared';
import {Option, OptionProps} from './option';
import {OptionGroup} from './group';
import {useFilterable} from './useFilterable';
import {useLabel} from './useLabel';
import {BaseSelect, BaseSelectProps} from './base';
import {_$} from '../../i18n';

export interface SelectProps extends BaseSelectProps {
    filter?: (keywords: string, props: any) => boolean 
    searchable?: boolean
    creatable?: boolean
    labelMap?: Map<any, Children> 
    card?: boolean
    autoDisableArrow: boolean
    // TODO
    // unmatchable: boolean

    _show?: boolean
}

const typeDefs: Required<TypeDefs<SelectProps>> = {
    ...BaseSelect.typeDefs,
    filter: Function,
    searchable: Boolean,
    creatable: Boolean,
    labelMap: Map,
    card: Boolean,
    autoDisableArrow: Boolean,

    _show: null,
};

const defaults = (): Partial<SelectProps> => ({
    ...BaseSelect.defaults(),
    labelMap: new Map(),
});

export class Select<T extends SelectProps = SelectProps> extends BaseSelect<T> {
    static template = template;
    static typeDefs = typeDefs;
    static defaults = defaults;

    public filterable: ReturnType<typeof useFilterable> | null = null;
    public label: ReturnType<typeof useLabel> | null = null;

    init() {
        super.init();
        this.filterable = useFilterable(this.input!.keywords);
        this.label = useLabel();
        this.watch('_show', this.setWidth, {presented: true});
    }

    protected getPlaceholder() {
        const {placeholder, creatable, filterable} = this.get();

        return isNullOrUndefined(placeholder) ?
            creatable && filterable ? _$('请输入或选择') : _$('请选择') :
            placeholder;
    }

    protected getLabel() {
        return this.label!.getLabel();
    }

    private getAllShowedValues(children: Children) {
        const values: any[] = [];
        const loop = (children: Children) => {
            eachChildren(children, vNode => {
                if (isComponentVNode(vNode, Option)) {
                    values.push((vNode.props! as OptionProps).value); 
                } else if (isComponentVNode(vNode, OptionGroup)) {
                    loop(vNode.props!.children);
                }
            });
        }

        loop(children);

        return values;
    }

    @bind
    private setWidth(v: boolean | undefined) {
        if (!v) return;

        const menuElement = findDomFromVNode(this.dropdownRef.value!.menuVNode!, true) as HTMLElement;
        const entity = findDomFromVNode(this.$lastInput!, true) as HTMLElement; 
        menuElement.style.minWidth = `${entity.offsetWidth}px`;
    }
}
