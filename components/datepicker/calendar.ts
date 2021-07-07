import {Component, inject} from 'intact';
import template from './calendar.vdt';
import dayjs, {Dayjs} from 'dayjs';
import {useDays} from './useDays';
import {useState} from '../../hooks/useState';
import {_$} from '../../i18n';
import {DATEPICKER} from './constants';
import type {Datepicker} from './index';
import {useShowDate} from './useShowDate';
import {bind} from '../utils';
import {useYears} from './useYears';
import {IgnoreClickEvent} from '../../hooks/useDocumentClick';
import {useMonths} from './useMonths';
import {StateValue} from './useValue';
import {useStatus} from './useStatus';
import {PanelFlags} from './usePanel';
import {useKeyboards} from './useKeyboards';

export interface DatepickerCalendarProps {
    value: StateValue
    type?: 'date' | 'year' | 'month'
    flag: PanelFlags
}

const defaults = (): Partial<DatepickerCalendarProps> => ({
    type: 'date'
});

export class DatepickerCalendar extends Component<DatepickerCalendarProps> {
    static template = template;
    static defaults = defaults;

    public type = useType(this);
    public datepicker: Datepicker = inject(DATEPICKER)!;
    public showDate = useShowDate(this.datepicker.panel);

    private status = useStatus(this.datepicker.focusDate.focusDate);
    private days = useDays(this.showDate.date, this.status, this.datepicker.focusDate.focusDate);
    private years = useYears(this.showDate.date, this.status, this.datepicker.focusDate.focusDate);
    private months = useMonths(this.showDate.date, this.status, this.datepicker.focusDate.focusDate);

    @bind
    triggerChange(value: Dayjs) {
        this.trigger('change', value, this.get('flag'));
    } 
}

function useType(instance: DatepickerCalendar) {
    const type = useState<Required<DatepickerCalendarProps['type']>>('date');
    instance.on('$receive:type', v => {
        type.set(v);
    });

    return type;
}
