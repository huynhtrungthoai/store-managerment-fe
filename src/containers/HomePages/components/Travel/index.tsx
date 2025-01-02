import ButtonPrimary from '@/components/Button/ButtonPrimary';
import SelectField from '@/components/Form-control/SelectField';
import useDebounce from '@/hooks/useDebounce';
import homeService from '@/services/address.service';
import environment from '@/utilities/environment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.scss';

interface IProps {}

interface FormBooking {
  from: string;
  to: string;
  day: string;
}

const defaultValues = {
  from: '3732679d-eb42-4e8d-b8c0-1caffe31f092',
  to: '',
  day: '1',
};

const dateRange = [
  {
    id: '1',
    name: '1-3 Ngày',
  },
  {
    id: '2',
    name: '4-6 Ngày',
  },
  {
    id: '3',
    name: '7-9 Ngày',
  },
  {
    id: '4',
    name: '9-12 Ngày',
  },
  {
    id: '5',
    name: 'Trên 12 ngày',
  },
];

const TravelTab: React.FC<IProps> = (props: IProps) => {
  const queryClient = useQueryClient();

  const [searchText, setSearchText] = useState({
    name: '',
    value: '',
  });

  const { data, refetch } = useQuery(['location'], () => homeService.getAddress({ isAll: true }));

  const mutateSearchAddress = useMutation({
    mutationFn: homeService.getAddress,
    onSuccess: (data: any) => {
      queryClient.setQueryData(['location'], data);
    },
    onError: (error) => {
      console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 error: ', error);
      return;
    },
  });

  const debouncedSearch = useDebounce(searchText, environment.VITE_DEBOUNCE_TIME);

  const { control, handleSubmit, setValue } = useForm<FormBooking>({
    reValidateMode: 'onSubmit',
    defaultValues,
  });

  const onSearch = (name: string, value: string) => {
    setSearchText({
      name,
      value,
    });
  };

  const onSubmit = (data: FormBooking) => {
    console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 data: ', data);
  };

  useEffect(() => {
    if (!debouncedSearch || !debouncedSearch?.value || !debouncedSearch?.name) {
      refetch();
      return;
    }

    mutateSearchAddress.mutate(
      {
        keywords: debouncedSearch.value,
      },
      {
        onSuccess: (data) => {
          queryClient.setQueryData(['location'], data);
        },
        onError: (error) => {
          console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 error: ', error);
          return;
        },
      }
    );
  }, [JSON.stringify(debouncedSearch)]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row className="select">
        <Col className="select__input--from">
          <SelectField
            onSearch={onSearch}
            placeholder={'Chọn điểm đến'}
            data={data?.data}
            fieldNames={{ label: 'name', value: 'id' }}
            name="from"
            control={control}
            loading={data?.data ? false : true}
            onChange={(data: string) => {
              setValue('from', data);
            }}
          />
        </Col>
        <Col className="vector"></Col>
        <Col className="select__input--to">
          <SelectField
            onSearch={onSearch}
            placeholder={'Chọn điểm đến'}
            data={data?.data}
            fieldNames={{ label: 'name', value: 'id' }}
            name="to"
            control={control}
            loading={data?.data ? false : true}
            onChange={(data: string) => {
              setValue('to', data);
            }}
          />
        </Col>
        <Col className="select__input--day">
          <SelectField
            onSearch={onSearch}
            placeholder={'Chọn điểm đến'}
            data={dateRange}
            fieldNames={{ label: 'name', value: 'id' }}
            name="day"
            control={control}
            loading={data?.data ? false : true}
            onChange={(data: string) => {
              setValue('day', data);
            }}
          />
        </Col>
        <Col>
          <ButtonPrimary text="Tìm kiếm" onClick={() => {}} backgroundColor={'#C79644'} />
        </Col>
      </Row>
    </form>
  );
};

export default TravelTab;
